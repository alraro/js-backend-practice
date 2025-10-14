import requests as req
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import sklearn as skl

def fetch_data(url):
    response = req.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        response.raise_for_status()

def setup_df(data):
    df = pd.DataFrame(data['data']).set_index('id')

    df['termd'] = df['termd'].astype(bool)
    df['salary'] = df['salary'].astype(float)

    return df

def plot_data(df): 
    df.plot(kind='scatter', x='perfscoresid', y='salary')
    # plt.yticks(df['salary'][::len(df)//10])
    save_path = './employee.png'
    plt.savefig(save_path)
    print(f"Plot saved to {save_path}")
    
def train_termination_date_model(df):
    train_data = df[df['termd'] == 1]
    

employee_data = fetch_data("http://localhost:3000/employees?limit=-1")
df = setup_df(employee_data)
termination_date_model = train_termination_date_model(df)
plot_data(df)

