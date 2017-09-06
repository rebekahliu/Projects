class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes!(user_params)
    render json: @user
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.new(user_params)
    # replace the `user_attributes_here` with the actual attribute keys
    user.save!
    if user.save
      render json: user_params
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: User.all
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end
end
