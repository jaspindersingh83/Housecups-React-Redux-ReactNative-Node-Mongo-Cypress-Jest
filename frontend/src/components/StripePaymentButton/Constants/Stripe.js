const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_1ENvPvHwX9kBUaPKsvmU2XZF';

export default STRIPE_PUBLISHABLE;