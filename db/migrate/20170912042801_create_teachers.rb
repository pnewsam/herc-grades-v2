class CreateTeachers < ActiveRecord::Migration[5.1]
  def change
    create_table :teachers do |t|
      t.integer :school_id
      t.timestamps
    end
  end
end
