from flask import Flask, json

app = Flask(__name__)

@app.route('/api/qoute')
def get_qoute():
    qoute = {
        'id': 1,
        'anime': 'Test',
        'character': 'character',
        'content': 'blabasddsakfjsdaklfjsdaklfjsadlkfjsklfjklsfsa'

    }
    return json.dumps(qoute)


if __name__ == '__main__':
    app.run()