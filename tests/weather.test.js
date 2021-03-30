const app  = require('../src/app')
const request = require('supertest')

test('should load the home page', () => {
    request(app).get('').send({
        title: 'weather',
        name: 'jacob newton'
    }).expect(200)
})


test('should load the error page', () => {
    request(app).get('/help/*').send({
        title: '404',
        name: 'Jacob newton',
        errorType: 'Help article not found.'
    }).expect(404)
})

test('should load the 404 page', () => {
    request(app).get('*').send({
        name: 'Jacob newton',
        title: '404',
        errorType: 'Page not found'
    }).expect(404)
})

test('should load the about page', () => {
    request(app).get('/about').send({
        name: 'Jacob newton',
        title: 'About me',
    }).expect(200)
})

test('should load the help page', () => {
    request(app).get('/help').send({
        title: 'Help',
        name: 'Jacob Newon',
        message: 'cannot access the weather api'
    }).expect(200)
})

test('should load the help page', () => {
    request(app).get('/weather-page').send({
        error: 'provide a location to fetch from'
    }).expect(200)
})
