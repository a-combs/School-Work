a = 5
b = 8
c = 12

d = a + b
e = a + d
f = d + e 

puts f 

fruits = [ 'apples', 'oranges', 'grapes']
fruit_colors = { :fruits[0] => 'red', :fruits[1] => 'orange', :fruits[2] => 'green'}

fruit_colors[:fruits[2]] = "purple"
puts fruit_colors[:fruits[2]]