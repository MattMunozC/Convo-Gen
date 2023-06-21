import requests
from bs4 import BeautifulSoup
from pprint import pprint
url=r"https://www.spriters-resource.com/3ds/fireemblemfates/"
scrapping=requests.get(url)
html_page=BeautifulSoup(scrapping.text,"html.parser")
filter=html_page.find_all("div",{"class":"updatesheeticons"})
portrait=filter[3].find_all("a")
for character in portrait:
    name=character.find("img")["alt"]
    url=r"https://www.spriters-resource.com/"+character["href"]
    scrapping=requests.get(url)
    html_page=BeautifulSoup(scrapping.text,"html.parser")
    img_url=html_page.find("img",{"alt":name})["src"]
    print(requests.get(f"https://www.spriters-resource.com/{character['href']}").content)
    pprint({"name":name,"url":img_url})
