class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    @title = "Home"
  	
  end

  def about
    @title = "About"

  end

  def tour
    @title = "Tour"
  	
  end

  def band
    @title = "Band"
  	
  end

  def multimedia
    @title = "Multimedia"
  	
  end

  def contact
    @title = "Contact"
  	
  end
end
