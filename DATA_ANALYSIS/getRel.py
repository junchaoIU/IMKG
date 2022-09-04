import json



obj = json.load(open('example.json', 'r', encoding='utf-8'))
ilist = []
for key in obj.keys():
    for item in obj[key]:
        ilist.append(item['key'])

print(list(set(ilist)))
