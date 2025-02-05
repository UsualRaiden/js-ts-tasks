/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
module.exports.groupUsers = function (users: Array<unknown>): Record<'employees' | 'contractors', Array<unknown>> {
  const employees: Array<unknown> = [];
  const contractors: Array<unknown> = [];

  for (const user of users) {
    if (typeof user === 'object' && user !== null && 'type' in user) {
      if ((user as any).type === 'EMPLOYEE') {
        employees.push(user);
      } else if ((user as any).type === 'CONTRACTOR') {
        contractors.push(user);
      }
    }
  }

  return { employees, contractors };
};
