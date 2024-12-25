from flask import Flask, render_template
from datetime import datetime

# Create Flask app instance
app = Flask(__name__)

# Define a route for the home page
@app.route('/')
def index():
    # You can pass dynamic data to the template if needed (like current date or time)
    return render_template('index.html')

# Start the Flask application
if __name__ == '__main__':
    app.run(debug=True)
