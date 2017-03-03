class Book < ActiveRecord::Base
	
	# class Book corresponds to our books table in the database.

	# SELECT * FROM books
	# Book.all

	# SELECT * FROM books WHERE id=1 LIMIT 1
	# Book.find(1)

	# SELECT * FROM books WHERE title="Something" LIMIT 1
	# Book.find_by(title: "Something")

	# SELECT * FROM books WHERE year_published=1988
	# Book.where(year_published: 1988)

	# INSERT
	# Book.create(year_published: 1988, title: "something", author: "someone")


end