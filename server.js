const express = require("express")
const app = express()
const PORT = 8000
const {faker} = require('@faker-js/faker')

const fakeUser = () => {
    const user = {
        name: faker.name.fullName(),
        phone: faker.phone.number(),
        email: faker.internet.email()
    }
    return user
}

const fakeCompany = () => {
    const company = {
        name: faker.company.name(),
        address: faker.address.streetAddress() + faker.address.city() + faker.address.country() + faker.address.zipCode(),
        industry: faker.commerce.department(),
        website: faker.internet.domainName()
    }
    return company
}


app.get('/api/users/new', (req, res) => {
    const newFakeUser = fakeUser()
    res.json({newFakeUser})
})

app.get('/api/companies/new', (req, res) => {
    const newFakeCompany = fakeCompany()
    res.json(newFakeCompany)
})

app.get('/api/users_and_companies/new', (req, res) => {
    const fakerCompany = fakeCompany()
    const fakerUser = fakeUser()
    console.log(fakerCompany, fakerUser)
    res.json(`${fakerCompany.name} at ${fakerCompany.address}. Industry is ${fakerCompany.industry} and our website is ${fakerCompany.website}. This information is being sent out to ${fakerUser.name} @ ${fakerUser.email}. If we cannot reach you we will reach out to ${fakerUser.phone}`)
})


app.listen( PORT, () => console.log(`Port: ${PORT} is up and running`))