---

# 🚀 Flujo de trabajo en equipo con Git

## 1. Crear una nueva rama para tu feature

```bash
git checkout main
git pull origin main           # actualiza main
git checkout -b featureX       # crea la rama local
git push -u origin featureX    # sube la rama al remoto
```

## 2. Trabajar en tu rama

* Haz commits normalmente:

  ```bash
  git add .
  git commit -m "Implemento X"
  git push
  ```

## 3. Mantener tu rama actualizada con `main`

Antes de seguir trabajando o cuando tu compi suba cosas a `main`:

```bash
git fetch origin
git rebase origin/main
# Si hay conflictos, resolverlos y luego:
git rebase --continue
git push --force   # solo en tu rama, nunca en main
```

## 4. Integrar la feature en `main`

Cuando tu rama esté lista y probada:

```bash
git checkout main
git pull origin main
git merge --no-ff featureX     # une la rama en main
git push origin main
```

## 5. Borrar la rama que ya no se usa

* Local:

  ```bash
  git branch -d featureX
  ```

* Remoto:

  ```bash
  git push origin --delete featureX
  ```

---

✅ Reglas de oro:

* Cada uno trabaja en **su rama de feature**, nunca directo en `main`.
* **Rebase solo en tus ramas privadas**, **merge para unir a main**.
* **Nunca hagas `push --force` en main**.
* Borrad ramas antiguas después de mergear para mantener limpio el repo.

---