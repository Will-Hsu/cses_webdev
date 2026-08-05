import { colors, fonts, radii } from '../../theme';

export const eventsStyles = () => ({
  pageWrapper: {
    backgroundColor: colors.background,
    minHeight: '100vh',
    pb: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: { xs: 3, md: 6 },
    pt: { xs: 16, md: 18 },
  },
  title: {
    fontFamily: fonts.heading,
    fontWeight: 700,
    fontSize: { xs: '2.2rem', md: '3rem' },
    color: colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: fonts.heading,
    fontSize: { xs: '0.85rem', md: '1rem' },
    color: colors.textSecondary,
    textAlign: 'center',
    mt: 2,
    px: 2,
  },
  sectionHeading: {
    fontFamily: fonts.heading,
    fontWeight: 700,
    fontSize: { xs: '1.6rem', md: '2.2rem' },
    color: colors.textPrimary,
    textAlign: 'center',
    mt: { xs: 6, md: 8 },
  },
  tabsWrapper: {
    width: '100%',
    maxWidth: '1000px',
    mt: 4,
  },
  cardsStack: {
    width: '100%',
    maxWidth: '1000px',
    mt: 4,
  },
  statusWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    mt: 8,
  },
  emptyText: {
    fontFamily: fonts.body,
    fontSize: '1rem',
    color: colors.textSecondary,
    textAlign: 'center',
  },
});

export const eventCardStyles = () => ({
  card: {
    display: 'block',
    backgroundColor: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.card,
    p: { xs: 2.5, md: 3 },
    width: '100%',
  },
  title: {
    fontFamily: fonts.body,
    fontWeight: 600,
    fontSize: { xs: '1.1rem', md: '1.25rem' },
    color: colors.textPrimary,
  },
  category: {
    fontFamily: fonts.body,
    fontSize: '0.9rem',
    color: colors.purple,
    mt: 0.5,
  },
  detailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    mt: 2.5,
  },
  detailRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.2,
    color: colors.textSecondary,
  },
  detailIcon: {
    fontSize: '1.1rem',
    color: colors.textSecondary,
  },
  detailText: {
    fontFamily: fonts.body,
    fontSize: '0.95rem',
    color: colors.textSecondary,
  },
});
