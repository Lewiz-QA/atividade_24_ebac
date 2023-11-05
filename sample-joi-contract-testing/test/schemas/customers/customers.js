describe('Customers Resource', () => {
    it('Deve validar o schema de uma lista de Clientes', done => {
      const customersList = Joi.array().items(Joi.object().keys({
        address: Joi.required(),
        createdAt: Joi.required(),
        email: Joi.required(),
        firstName: Joi.required(),
        id: Joi.required(),
        lastName: Joi.required(),
        phone: Joi.required(),
        updatedAt: Joi.required()
      }));
  
      request
        .get("/customers")
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk5MTU4MDM0LCJleHAiOjE2OTkzMzA4MzR9.SVmJWoWKVVo2y9-Dd_qT-2xtCooCMwU23TB5OuSfhd4')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end((err, res) => {
          joiAssert(res.body, customersList);
          done(err);
        });
    });
  });