import os
from dotenv import load_dotenv

from seo_analyzer.analyze import analyze

def main():
    load_dotenv()
    analyze()

if __name__ == '__main__':
    main()