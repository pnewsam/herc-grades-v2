class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name, null: false
      t.string :description
      t.integer :grade
      t.timestamps
    end
  end
end
