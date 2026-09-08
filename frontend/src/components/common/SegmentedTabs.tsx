import { Box, ButtonBase } from '@mui/material';
import { colors, fonts, radii } from '../../theme';

interface SegmentedTabsProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const SegmentedTabs = ({ options, value, onChange }: SegmentedTabsProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: radii.pill,
        // Tight padding so the active pill nearly fills the bar, as in the design.
        p: '2px',
        overflowX: 'auto',
      }}
    >
      {options.map((option) => (
        <ButtonBase
          key={option}
          onClick={() => onChange(option)}
          sx={{
            flex: 1,
            minWidth: 'fit-content',
            px: { xs: 2, md: 4 },
            py: 1,
            borderRadius: radii.pill,
            fontFamily: fonts.body,
            fontSize: { xs: '0.8rem', md: '0.95rem' },
            fontWeight: 500,
            whiteSpace: 'nowrap',
            color: colors.textPrimary,
            backgroundColor: option === value ? colors.purpleBright : 'transparent',
            transition: 'background-color 0.2s ease',
            '&:hover': {
              backgroundColor: option === value ? colors.purpleBright : 'rgba(114, 93, 240, 0.15)',
            },
          }}
        >
          {option}
        </ButtonBase>
      ))}
    </Box>
  );
};

export default SegmentedTabs;
