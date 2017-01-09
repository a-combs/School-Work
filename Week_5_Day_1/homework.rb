# create a function that takes a string as an argument and adds the phrase
# "only in america"
puts "who has maximum freedom"
freedom = gets.chomp
puts "#{freedom}, only in America"

# create a function to find the maximum value in an array of numbers without
# using the .max function
array = [100, 10, -1000]
puts array.sort.last

# create a function that takes two arguments, both arrays. Inside the function
# combine the arrays using the first array as keys and second array as values
make = [ :Cadillac, :Chevy ]
car_models =  {make[0] => 'Deville', make[1] => 'Suburban'}
puts car_models

# Write a program that prints the numbers from 1 to 100, except:
# for multiples of three print "Fizz" instead of the number
# for multiples of five print "Buzz"
# Print "FizzBuzz" for numbers that are multiples of both 3 and 5
numbers = Array(1..100)
numbers.each do |num|
	if num % 15 == 0
		puts "FizzBuzz"
	elsif num % 5 == 0
		puts "Buzz"
	elsif num % 3 == 0
		puts "Fizz"
	else
		puts num
	end
end