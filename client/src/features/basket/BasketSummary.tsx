import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../app/router/configureStore";

export default function BasketSummary() {
  const { basket } = useAppSelector((state) => state.basket);

  // if (!basket)
  //   return <Typography variant="h3">Your basket is empty</Typography>;

  const subTotal = basket?.items
    ? basket?.items.reduce(
        (sum, item) => sum + (item.price / 100) * item.quantity,
        0
      )
    : 0;

  const deliveryFeeTopLimit = 100;
  const deliveryFeeAmount = 5;

  const deliveryFee = subTotal > deliveryFeeTopLimit ? 0 : deliveryFeeAmount;

  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell>Sub Total</TableCell>
            <TableCell align="right">${subTotal}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Delivery Fee</TableCell>
            <TableCell align="right">${deliveryFee}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell align="right">${subTotal + deliveryFee}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                * Orders over ${deliveryFeeTopLimit} qualify for free delivery
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
