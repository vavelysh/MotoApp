import { Skeleton } from '@material-ui/lab';
import styled from 'styled-components';

export const StyledSkeleton = styled(Skeleton)`
  && {background-color: ${({theme})=>theme.secondaryColor};
`
