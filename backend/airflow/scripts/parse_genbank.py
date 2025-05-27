from Bio import SeqIO
import requests
import os

def parse_genbank_file(file_path):
    for record in SeqIO.parse(file_path, "genbank"):
        organism = record.annotations.get('organism', 'Unknown')
        for feature in record.features:
            if feature.type == 'CDS':
                start = int(feature.location.start)
                end = int(feature.location.end)
                cds_data = {
                    'organism': organism,
                    'location': {'start': start, 'end': end},
                    'sequence': str(record.seq[start:end]),
                    'source_file': os.path.basename(file_path)
                }
                response = requests.post(
                    'http://node-api:3000/api/features',
                    json=cds_data
                )
                if not response.ok:
                    raise Exception(f"Failed to ingest: {response.text}")
