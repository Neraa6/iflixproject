import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc 
} from 'firebase/firestore';
import { db } from '../firebase';
import { 
  TextField, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  IconButton
} from '@mui/material';
import { 
  Edit as EditIcon, 
  Delete as DeleteIcon,
  Save as SaveIcon
} from '@mui/icons-material';

function MovieCRUD() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ 
    title: '', 
    genre: '', 
    year: '' 
  });
  const [editingId, setEditingId] = useState(null);

  // CREATE
  const addMovie = async () => {
    await addDoc(collection(db, "movies"), newMovie);
    setNewMovie({ title: '', genre: '', year: '' });
    fetchMovies();
  };

  // READ
  const fetchMovies = async () => {
    const querySnapshot = await getDocs(collection(db, "movies"));
    setMovies(querySnapshot.docs.map(doc => ({ 
      id: doc.id, 
      ...doc.data() 
    })));
  };

  // UPDATE
  const updateMovie = async (id) => {
    const movieRef = doc(db, "movies", id);
    await updateDoc(movieRef, newMovie);
    setEditingId(null);
    setNewMovie({ title: '', genre: '', year: '' });
    fetchMovies();
  };

  // DELETE
  const deleteMovie = async (id) => {
    await deleteDoc(doc(db, "movies", id));
    fetchMovies();
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="crud-container">
      <h2>Kelola Film IFlix</h2>
      
      {/* CREATE FORM */}
      <div className="form-group">
        <TextField
          label="Judul Film"
          value={newMovie.title}
          onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
        />
        <TextField
          label="Genre"
          value={newMovie.genre}
          onChange={(e) => setNewMovie({...newMovie, genre: e.target.value})}
        />
        <TextField
          label="Tahun"
          value={newMovie.year}
          onChange={(e) => setNewMovie({...newMovie, year: e.target.value})}
        />
        
        {editingId ? (
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<SaveIcon />}
            onClick={() => updateMovie(editingId)}
          >
            Update
          </Button>
        ) : (
          <Button 
            variant="contained" 
            color="success" 
            onClick={addMovie}
          >
            Tambah Film
          </Button>
        )}
      </div>

      {/* READ TABLE */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Judul</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>Tahun</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie) => (
              <TableRow key={movie.id}>
                <TableCell>{movie.title}</TableCell>
                <TableCell>{movie.genre}</TableCell>
                <TableCell>{movie.year}</TableCell>
                <TableCell>
                  <IconButton 
                    color="primary" 
                    onClick={() => {
                      setNewMovie({
                        title: movie.title,
                        genre: movie.genre,
                        year: movie.year
                      });
                      setEditingId(movie.id);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    color="error" 
                    onClick={() => deleteMovie(movie.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MovieCRUD;