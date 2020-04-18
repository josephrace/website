/** @jsx jsx */
import { Link as GatsbyLink } from 'gatsby';
import { jsx, SxStyleProp } from 'theme-ui';

type Props = {
  to: string;
  sx?: SxStyleProp;
};

const Link: React.FC<Props> = props => (
  <GatsbyLink
    {...props}
    activeClassName="active"
    sx={{ color: 'inherit', '&.active': { color: 'primary' }, ...props.sx }}
  />
);

export default Link;
