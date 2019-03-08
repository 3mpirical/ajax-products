class BooksController < ApplicationController
    before_action :get_book, only: [:show, :update, :destroy]

    def index
        @books = current_user.books.all()
        render(json: @books)
    end

    def show
        render(json: @book)
    end

    def create
        
    end

    def update
        
    end

    def destroy
        
    end

    private
        def get_book
            return @book = current_user.books.find(params[:id])
        end

end
