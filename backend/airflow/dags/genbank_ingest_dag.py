from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime
import os
from scripts.parse_genbank import parse_genbank_file

DEFAULT_DIR = '/data/genbank'
FILES = [f for f in os.listdir(DEFAULT_DIR) if f.endswith('.gb')]

with DAG(
    dag_id='genbank_ingest',
    start_date=datetime(2025, 5, 27),
    schedule_interval='@hourly',
    catchup=False,
    tags=['bioinformatics', 'genbank']
) as dag:

    for file in FILES:
        PythonOperator(
            task_id=f'parse_{file.replace(".", "_")}',
            python_callable=parse_genbank_file,
            op_kwargs={'file_path': os.path.join(DEFAULT_DIR, file)},
        )
