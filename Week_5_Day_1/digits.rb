puts 'What is your number?'
number_string = gets.chomp
number = number_string.to_i

puts "Now enter a password"
password = gets.chomp

# look for a password of "correct" to give a message if the number
# does not equal 15

if number < 15 && password == "correct"
	puts "It's less than 15!"
elsif number <15
	puts"I cant tell you anything because the password is incorrect"
elsif number == 15
	puts "That number is equal to 15"
elsif number > 15 && password == "correct"
	puts "It's greater than 15!"
else
	puts "I cant tell you anything because the password is incorrect"
end

# "Secret number" is 15

# if(number != 15 && password != "correct")
# 	puts "We cant tell you anything"
# end

# if fav fruit is apple or pear, tell them thats delicious
# if fav fruit is orange, grapefuit or lemon, tell them that is also delicious
# if its none of those things, tell them I dont understand what your saying


puts "Tell me your favorite fruit"
fruit = gets.chomp

if fruit == "apple" || fruit == "pear"
	puts "That's delicious"
elsif fruit == "orange" || fruit == "grapefruit" || fruit == "lemon"
	puts "That is also delicious"
else
	puts "I dont understand what you are saying"
end
		
my_array = ["element1", "element2", "element3"]

for element in my_array
	puts "#{element}"
end

my_array.each do |element|
	puts "#{element}"
end

i = 0
while i < 10
	puts "This number is less than 10"
end

until i > 10
	puts "this number is greater than 10"
	i++
end

# javascript
# function subtractTwo(n){
#  return n - 2
# }

def subtract_two(n)
	n - 2
end

def divide(x, y)
	if (x == 0 || y == 0)
		return "We dont do math on zeros"
	end

	x / y
end