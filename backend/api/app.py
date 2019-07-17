from flask import Flask, jsonify, send_from_directory

import os

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/<path:path>', methods=['GET'])
def static_proxy(path):
  return send_from_directory('./', path)


@app.route('/')
def root():
  return send_from_directory('./', 'index.html')


@app.route('/api/prose', methods=['GET'])
def get_prose():

    folder = 'prose'

    articles = []

    directory = os.fsencode(folder)
    for file in os.listdir(directory):
         filename = os.fsdecode(file)
         articles.append(process_article(folder + '/' + filename))

    return jsonify(articles)


@app.route('/api/poetry', methods=['GET'])
def get_poetry():

    folder = 'poetry'

    poems = []

    directory = os.fsencode(folder)
    for file in os.listdir(directory):
         filename = os.fsdecode(file)
         poems.append(process_poem(folder + '/' + filename))

    return jsonify(poems)


def process_article(filename):
    article = {}
    firstLine = True
    curPar = ''
    with open(filename) as f:
        for line in f:
            line = line.rstrip()
            if firstLine:
                article['title'] = line
                firstLine = False
                article['body'] = []
            elif line:
                curPar += line + ' '
            else:
                article['body'].append(curPar)
                curPar = ''
    return article

def process_poem(filename):
    poem = {}
    firstLine = True
    with open(filename) as f:
        for line in f:
            line = line.rstrip()
            if firstLine:
                poem['title'] = line
                firstLine = False
                poem['body'] = [[]]
            elif line:
                poem['body'][-1].append(line)
            else:
                poem['body'].append([])
    return poem


if __name__ == '__main__':
   app.run()

@app.errorhandler(500)
def server_error(e):
  return 'An internal error occurred [main.py] %s' % e, 500

# No caching at all for API endpoints.
@app.after_request
def add_header(response):
    # response.cache_control.no_store = True
    response.headers['Cache-Control'] = 'no-store, no-cache, must-\
    revalidate, post-check=0, pre-check=0, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '-1'
    return response
