import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import perfil from "../media/perfil.png";


export default function CardMe() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={perfil}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Milagros Chamorro
          </Typography>
          <Typography variant="body2" color="text.secondary" align="justify">
          Me motiva seguir aprendiendo y creciendo como desarrrolladora y llegar a convertirme en un activo importe dentro de un equipo de trabajo.
          Se me da muy bien el trabajo en equipo, me considero una persona perseverante, empatica y con capacidad organizativa.
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
