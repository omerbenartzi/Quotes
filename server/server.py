from flask import Flask, jsonify, json
from flask_cors import CORS, cross_origin
import random

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

PATH = 'data.json'

def read_db(path):
    try:
        with open(PATH) as f:
            return json.load(f)
    except IOError:
        return [{
        'id': 1,
        'anime': 'Test',
        'character': 'character',
        'content': 'blabasddsakfjsdaklfjsdaklfjsadlkfjsklfjklsfsa'

    }]

def get_single_qoute():
    qoutes = read_db(PATH)

    return qoutes[random.randrange(0, len(qoutes))]

@app.route('/api/quote')
@cross_origin()
def get_quote():
    return jsonify(get_single_qoute())

if __name__ == '__main__':
    app.run('0.0.0.0', 5000)