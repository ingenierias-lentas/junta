import os

from pyseoanalyzer import analyze


def analyze():
    site = os.getenv('SITE')
    sitemap = os.getenv('SITEMAP')

    output = analyze(site, sitemap, analyze_headings=True, analyze_extra_tags=True)

    print(output)