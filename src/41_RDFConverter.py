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

path = "data/test.rdf"

g = Graph().parse(path)

g.serialize(format='nt', destination=path.replace(".rdf", ".nt"))
g.serialize(format='turtle', destination=path.replace(".rdf", ".ttl"))