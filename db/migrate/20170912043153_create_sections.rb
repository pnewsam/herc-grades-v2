class CreateSections < ActiveRecord::Migration[5.1]
  def change
    create_table :sections do |t|
      t.integer :period
      t.integer :academic_year_start
      t.integer :academic_year_end
      t.integer :teacher_id, null: false
      t.integer :course_id, null: false
      t.timestamps
    end
  end
end
