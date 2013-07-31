class AddGistIdToGistFiles < ActiveRecord::Migration
  def change
    add_column :gist_files, :gist_id, :integer
  end
end
