import sys
import json
import argparse
import requests
import os
import glob
import yaml
import shutil
import datetime
from rdflib import URIRef, BNode, Literal, Graph

files = glob.glob("../docs/api/items/*.json")

arr = []

map = {}

for i in range(len(files)):
    if i % 100 == 0:
        print(str(i+1)+"/" + str(len(files)))
    file = files[i]
    with open(file) as f:
        obj = json.load(f)

        del obj["@context"]

        types = obj["@type"]

        if types == "o:Item":
            # continue

            types = [types]

        for type in types:
            '''
            if type == "o:Item":
                continue
            '''
            
            if type not in map:
                map[type] = []
            
            
            map[type].append(obj)

        # arr.append(obj)

for type in map:
    print(type, len(map[type]))
    arr = map[type]

    arr = {
        "@context" : "http://enpaku-jdta.jp/api-context",
        "@graph": arr
    }

    path = "data/"+type.split(":")[1]+".json"

    ld_str = json.dumps(arr)
    g = Graph().parse(data=ld_str, format='json-ld')
    g.serialize(format='turtle', destination=path.replace("json", "ttl"))
    g.serialize(format='pretty-xml', destination=path.replace("json", "rdf"))