class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id

  belongs_to :user
  has_one :favorite
  has_many :gist_files

  def as_json(options = {})
    super(options.merge(include: [:favorite, :gist_files]))
  end
end
