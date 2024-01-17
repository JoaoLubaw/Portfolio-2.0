from django.db import models

def nome_img(instance, filename):
    extensao = filename.split('.')[-1]  # Obtém a extensão do arquivo
    # Use instance.pk para obter a chave primária do objeto
    ID = instance.pk or ""
    nome_arq = f"Imagem{ID}.{extensao}"  # Define o nome do arquivo como "ImagemID + extensão"
    return f"project-prints/{nome_arq}"  # Substitua "caminho/do/destino/" pelo caminho desejado

class Project(models.Model):
    ID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=200)
    Description = models.CharField(max_length=500)
    Link = models.CharField(max_length=500, null=True, blank=True)
    LinkGit = models.CharField(max_length=500, null=True, blank=True)
    LinkBack = models.CharField(max_length=500, null=True, blank=True)
    LinkGitBack = models.CharField(max_length=500, null=True, blank=True)
    Imagem = models.ImageField(upload_to=nome_img)

    Tags = models.JSONField(default=list, blank=True)

    @property
    def imagem_adress(self):
        return nome_img(self, self.Imagem.name)

    def __str__(self):
        return self.Name