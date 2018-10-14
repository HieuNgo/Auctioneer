import sqlite3
from flask import Flask, jsonify, g, redirect, request, url_for

app = Flask(__name__)

@app.before_request
#def before_request():
 #   g.db = sqlite3.connect('database.db')

@app.teardown_request
def teardown_request(exception):
    if hasattr(g, 'db'):
        g.db.close()

@app.route('/')
def index():
    return redirect(url_for('static', filename='page.html'))

@app.route('/json-data/')
def json_data():
    # get number of items from the javascript request
    nitems = request.args.get('nitems', 2)
    # query database
    #cursor = g.db.execute('select * from items limit ?', (nitems,))
    # return json
    return jsonify(dict(('item%d' % i, item)
                        for i, item in enumerate(cursor.fetchall(), start=1)))

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5001) # http://localhost:5001/
else:
    application = app # for a WSGI server e.g.,
    # twistd -n web --wsgi=hello_world.application --port tcp:5001:interface=localhost
