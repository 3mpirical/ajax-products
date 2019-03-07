

User.destroy_all();


User.create(
    first_name: "Betty",
    last_name: "White",
    degree: "Econophysionomy",
    email: "fake@mail.com",
    password: "password",
)

for i in (1..3)
    User.create(
        first_name: Faker::Name.first_name(),
        last_name: Faker::Name.last_name(),
        degree: Faker::Educator.degree(),
        email: Faker::Internet.email(),
        password: "password",
    )
end

User.all().each() {|user|

    for i in (1..10)
        course = Course.create(
            user_id: user.id,
            course: Faker::Educator.course_name(),
        )

        Book.create(
            course_id: course.id,
            book: Faker::Book.title(),
            price: "$#{Faker::Commerce.price(0..500)}",
        )

        Teacher.create(
            course_id: course.id,
            teacher: Faker::GreekPhilosophers.name(),
        )
    end
}


puts "_____Database_Seeded_____"
