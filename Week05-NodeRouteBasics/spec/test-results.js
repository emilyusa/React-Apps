/**
 * Created by charlie on 10/7/15.
 */

var request = require('supertest');
var app = require('../app');

describe('Elvenware Simple Plain Suite', function() {

    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });


    it('expects route /getOnea not to exist', function(done) {
        // console.log("Expect:", request(app).get('/').expect(1, done));
        request(app)
            .get('/getOnea')
            .expect('Content-Type', /html/)
            .expect(404)
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });

    it('getFeetInMileResult', function(done) {
        request(app)
            .get('/getFeetInMile')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
                if(err) throw err;
                expect(res.body.result).toBe(5280);
                done();
            });
    });

    it('calculateFeetResult', function(done) {
        request(app)
            .get('/calculateFeet')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
                if(err) throw err;
                done();
            });
    });

    it('calculateCircumferenceResult', function(done) {
        request(app)
            .get('/calculateCircumference')
            .query({radius: 5})
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
                if(err) throw err;
                done();
            });
    });

});
