import requests as req
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

def fetch_data(url):
    response = req.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        response.raise_for_status()

def setup_df(data):
    df = pd.DataFrame(data['data']).set_index('id')
    return df

def plot_data(df): 
    df.plot(kind='scatter', x='absences', y='salary')
    save_path = '/home/alraro/js-backend-practice/AI/employee_scatter.png'
    plt.savefig(save_path)

employee_data = fetch_data("http://localhost:3000/employees?limit=-1")
df = setup_df(employee_data)

plot_data(df)
print(df)
