### Sentiment Analysis

This is a simple sentiment analysis project using the [Placeholder for dataset](https://nlp.stanford.edu/sentiment/index.html) dataset. The dataset contains __ sentences from reviews, each sentence is labeled with a sentiment score from 0 and 1. The goal is to predict the sentiment score of a sentence.


### Environment Setup

1. Install [Anaconda](https://www.anaconda.com/download/)
2. Create a new environment with Python 3.6: `conda create -n sentiment python=3.6`
3. Activate the environment: `source activate sentiment`
4. Install other dependencies: `pip install -r requirements.txt`


### with virtualenv

1. In your Command Prompt enter:
    `pip install virtualenv`

2. Launch virtualenv : In your Command Prompt navigate to your project:(`cd your_project`) and enter:

    `virtualenv env`

3. Activate virtualenv:
    
   `source env/bin/activate`   
    `env\Scripts\activate` on Windows

4. Install other dependencies: `pip install -r requirements.txt`




### Run Flask App

1. Activate the environment: `source activate sentiment`

2. Go to the app directory: `cd api`

3. Run the app: `python app.py`


### Run React App

1. Activate the environment: `source activate sentiment`

2. Go to the app directory: `cd sentiment-web`

3. Install dependencies: `yarn install`

4. Run the app: `yarn run dev`

5. Open the app in your browser: `http://localhost:3000`















