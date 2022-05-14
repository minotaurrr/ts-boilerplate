import { schemas } from 'middlewares/schemas';

describe('Joi Schemas', () => {
  describe('usernameQuery', () => {
    const { usernameQuery } = schemas;

    it('should pass validation', () => {
      const validation = usernameQuery.validate({ username: 'hey' });

      expect(validation).not.toHaveProperty('error');
    });

    it('should fail validation', () => {
      const validation = usernameQuery.validate({ 'something-else': 'hey' });

      expect(validation).toHaveProperty('error');
    });

    it('should fail validation', () => {
      const validation = usernameQuery.validate({ username: 123 });

      expect(validation).toHaveProperty('error');
    });
  });
});
