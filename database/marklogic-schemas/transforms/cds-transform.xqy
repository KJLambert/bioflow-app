xquery version "1.0-ml";
declare function local:transform($doc as node(), $context as map:map) as node()* {
  for $cds in $doc//CDS
  return $cds
};