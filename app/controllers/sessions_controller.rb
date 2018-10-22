class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      login(@user)
      render 'api/users/show'
    else
      render json: ["The email address and password you entered do not match."], status: 422
    end
  end

  def destroy
    logout
  end
end
