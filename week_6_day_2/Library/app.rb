require 'sinatra'
require 'sinatra/activerecord'
require './book'

set :database, { adapter: "sqlite3", database: "library.sqlite3" }

get '/' do
	@books = Book.all
  erb :index
end

get '/' do
	"Hello"
	book = Book.create(title: "Hunt for Red October", author: "Tom Clancy", year_published: 1987)
	puts book
	if book.persisted?
		"Book: #{book.title}, #{book.author}, #{book.year_published}"
	end
end

get '/books/:id' do
	@book = Book.find(params[:id])
	erb :book
end

post '/books' do
	book = Book.create(params)
	if book.persisted?
		"Thanks for adding #{book.title} to your library"
	end
end

delete '/books/:id' do
	book = Book.find(params[:id])
	book.destroy
end


# # index
# get '/books'
# # show
# get '/books/:id'
# # destroy
# delete '/books/:id'
# # update
# put '/books/:id'
# # create
# post '/books'
