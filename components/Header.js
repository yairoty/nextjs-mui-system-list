import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router'

const Header = () => {
  const { asPath } = useRouter();
  let title = '';
  switch (asPath) {
    case '/':
      title = 'System List';
  }

  return (
    <Typography variant="h4" component="div" align="center" color="primary">
      {title}
    </Typography>
  )
};

export default Header;
