txt = '[1,32,3],[2,3,4]'

txt = txt.replace('],[','-')
txt = txt.replace(']','')
txt = txt.replace('[','')

x = txt.split('-',1)
list1 = x[0]
list2 = x[1]

list1 = list1.split(',')
list2 = list2.split(',')

int_list1=list(map(int,list1))
int_list2=list(map(int,list2))