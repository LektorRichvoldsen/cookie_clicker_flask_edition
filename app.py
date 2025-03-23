from flask import Flask, render_template, request
import config
from database import get_top_ten, save_score

print(config.PWD)

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'] )
def index():

    #Sjekker om noen har sendt data via form
    if request.method == 'POST':
        save_score(request.form["navn"], request.form["score"])
   
    return render_template("index.html", items = get_top_ten())

@app.route('/save', methods=['POST'])
def save():
    return render_template("lagreScore.html")

if __name__ == '__main__':
    app.run(debug = True)
