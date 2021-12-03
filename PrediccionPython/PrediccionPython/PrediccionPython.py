import pandas as pd
tele = pd.read_csv("TV_Final.csv")
tipo_venta =  tele.groupby('Rating',as_index=False).agg({'Brand':'count','Original Price':'mean'})

print(tipo_venta.rename(columns={'Marca':'NUM','Precio':'Rating'}))