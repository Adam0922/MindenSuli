using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        int penz = 0;
        int range = 0;

        public MainWindow()
        {
            InitializeComponent();
        }

        private void egyenlegInput_TextChanged(object sender, TextChangedEventArgs e)
        {
            
        }

        public void feltoltBTN_Click(object sender, RoutedEventArgs e)
        {
            if (tszamInput.Text != "")
            {
                if (Convert.ToInt32(egyenlegInput.Text) != 3000 && Convert.ToInt32(egyenlegInput.Text) != 5000 && Convert.ToInt32(egyenlegInput.Text) != 7000)
                {
                    MessageBox.Show("3000 or 5000 or 7000");
                }
                else
                {
                    penz += Convert.ToInt32(egyenlegInput.Text);
                }
            }
            else if (tszamInput.Text.Length > 11 && tszamInput.Text.Length < 11)
            {
                    MessageBox.Show("A telefonszámnak 11 karakternek kell lenni");   
            }
            
        }

        public void egyenlegBTN_Click(object sender, RoutedEventArgs e)
        {
            Labello.Content = "Az ön egyenlege: " + penz;
        }

        private void ujraBTN_Click(object sender, RoutedEventArgs e)
        {
            Labello.Content = "";
            egyenlegInput.Text = "";
            tszamInput.Text = "";
        }

        private void tszamInput_TextChanged(object sender, TextChangedEventArgs e)
        {
            
        }
    }
}
