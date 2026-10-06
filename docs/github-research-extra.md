# Additional GitHub project review

Reviewed October 7, 2026. Read all seven READMEs and inspected the implemented training, inference or notebook code. GitHub API supplied repository metadata and trees for the first four repositories below. Its unauthenticated quota then expired; raw GitHub files and main-branch archives supplied the remaining evidence. The last three repositories' push dates and star counts are therefore intentionally not reported. All results below are repository-reported, not independently retrained benchmarks.

## Recommended additions

### MS-AFR-Net — multi-scale fingerprint recognition

- Repository: [MS-AFRNET](https://github.com/Kush5699/MS-AFRNET). Created May 15, 2026; last push May 15, 2026; zero stars at review.
- Problem: Fingerprints captured under different sensor conditions require both fine ridge details and broader structure; a single feature scale may miss complementary information.
- Approach: Reproduce an AFR-Net baseline, then combine ResNet-50 Conv3/4/5 features into a 1,029-token pyramid. Six cross-scale attention layers and an adaptive fusion gate form a multi-scale embedding, alongside a CNN branch. The repository includes ArcFace training, embedding extraction, verification/identification evaluation, training logs, plots and JSON results.
- Stack: Python, PyTorch, torchvision, NumPy, SciPy, matplotlib, Kaggle/CUDA.
- Safe result copy: “Repository-reported mean EER improved from 41.29% to 19.22% across seven primary contact-based benchmarks in a data-constrained baseline comparison.”
- Evidence: [training implementation](https://github.com/Kush5699/MS-AFRNET/blob/main/ms_afrnet_training_kaggle.py), [evaluation outputs](https://github.com/Kush5699/MS-AFRNET/blob/main/msafrnet_v2_results/ms_afrnet_results.json), [academic report](https://github.com/Kush5699/MS-AFRNET/blob/main/report.tex).
- Caveats: The 53.5% figure is a **relative EER reduction**, not accuracy or percentage-point improvement. Seven primary benchmarks means six FVC sets plus PolyU contact; four difficult modalities have substantially higher error. This compares two local reproductions trained on a smaller corpus than the original paper, not a claim to outperform the original published model. Kush and Talak Shrabari are credited; do not imply sole authorship or peer-reviewed publication.
- Suggested headline metric: “3 scales” / “Cross-scale fingerprint features,” with the EER comparison explained in the case study.

### FREUID — document fraud under domain shift

- Repository: [freuid-challenge-2026](https://github.com/Kush5699/freuid-challenge-2026). Created July 15, 2026; last push July 15, 2026; zero stars at review.
- Problem: A document fraud classifier can memorize document layouts and fail on unseen document types.
- Approach: Concatenate three SRM forensic noise maps with RGB channels, adapt an EVA02-Large backbone to six-channel input, pool with GeM, and train a compact classification head. V15 uses `LeaveOneGroupOut` by document type and asserts each validation fold contains exactly one held-out type. Inference averages fold predictions with horizontal-flip augmentation. The repository includes V12/V15 training, cross-version ensemble scripts, a technical report and a standalone Docker inference entry point.
- Stack: Python, PyTorch, timm, Albumentations, scikit-learn, pandas, Docker/CUDA.
- Safe result copy: “Implemented document-type-held-out validation and containerized fold-ensemble inference for the FREUID 2026 challenge.”
- Evidence: [LOTO training](https://github.com/Kush5699/freuid-challenge-2026/blob/main/freuid_v15.py), [Docker inference](https://github.com/Kush5699/freuid-challenge-2026/blob/main/docker/inference.py), [technical report](https://github.com/Kush5699/freuid-challenge-2026/blob/main/report/technical_report.tex).
- Caveats: Data and weights are excluded. This is a competition solution, not a deployed fraud service. The report records public-score experiments and expects better private generalization, but does not establish a verified private leaderboard rank. Avoid claimed private improvement, competition award or deployment impact.
- Suggested headline metric: “LOTO” / “Validate on unseen document types.”

### Gujarati VSR — learning from visual speech

- Repository: [gujarati-vsr](https://github.com/Kush5699/gujarati-vsr). Created April 13, 2026; last push April 13, 2026; zero stars at review.
- Problem: Gujarati lip-reading experiments face scarce aligned video data and limited task-specific evaluation resources.
- Approach: Build video/lip preprocessing and label-manifest scripts; extract AV-HuBERT visual features and MMS audio tokens; train Conformer-based sentence models and implement feature-only, Conformer and synchronization-loss word-level experiment variants. The source contains genuine dataset, tokenizer, attention/CTC, audio-token, training and diagnostics code rather than only a proposal.
- Stack: Python, PyTorch, torchaudio, Transformers, SentencePiece, AV-HuBERT, MMS-300m, FFmpeg.
- Safe result copy: “An implemented research pipeline with early sentence-level experiments; the dedicated word-level dataset and benchmark remain in progress.”
- Evidence: [sentence training](https://github.com/Kush5699/gujarati-vsr/blob/main/gujarati_vsr/lightning_phase2_train.py), [word experiments](https://github.com/Kush5699/gujarati-vsr/blob/main/gujarati_vsr/word_level_syncvsr.py), [repository README](https://github.com/Kush5699/gujarati-vsr#readme).
- Caveats: README reports 5,216 sentence clips and falling validation loss, but explicitly says the model did not learn a reliable lip-to-text mapping. Word-level accuracy is TBD. Current sentence configuration sets `sync_weight = 0.0`, documenting that synchronization hurt in the small-data setting. Some source variants differ from the high-level README architecture. Do not present synchronization as an established gain, the planned 30-class Gu-LRW data as complete, or “first ever” dataset claims as verified.
- Suggested headline metric: “In progress” / “Low-resource visual speech research.”

### Sleep breathing — participant-held-out signal classification

- Repository: [sleep-apnea-detection](https://github.com/Kush5699/sleep-apnea-detection). Created March 5, 2026; last push March 8, 2026; zero stars at review.
- Problem: Overnight sensor recordings have mismatched sampling rates and highly imbalanced breathing-event classes; random window splits can obscure generalization to new participants.
- Approach: Align airflow, thoracic movement and SpO₂; filter and segment signals into overlapping 30-second windows; upsample SpO₂; train a three-channel 1D CNN with weighted cross entropy. `train_model.py` explicitly excludes the test participant from each training fold. Five-fold results are committed as CSV alongside visualization and confusion-matrix outputs.
- Stack: Python, PyTorch, pandas, NumPy, SciPy, scikit-learn, matplotlib, Jupyter.
- Safe result copy: “Completed preprocessing and five-fold leave-one-participant-out evaluation, exposing the difficulty of generalizing across a small, imbalanced cohort.”
- Evidence: [training implementation](https://github.com/Kush5699/sleep-apnea-detection/blob/main/scripts/train_model.py), [stored fold results](https://github.com/Kush5699/sleep-apnea-detection/blob/main/results/lopo_results.csv), [preprocessing](https://github.com/Kush5699/sleep-apnea-detection/blob/main/scripts/create_dataset.py).
- Caveats: Mean fold accuracy is 57.67%, macro precision 38.30%, macro recall 44.55%; approximately 91% of windows are normal. These values do not establish clinical validity or diagnostic deployment. Use the honest evaluation story rather than a “high accuracy” headline. README states SRIP 2026/IIT Gandhinagar, but the project alone should not be used to invent a new employer/timeline entry.
- Suggested headline metric: “5 folds” / “Leave one participant out.”

## Other substantial repositories reviewed

| Repository | Verified implementation | Why it is secondary to the four above |
| --- | --- | --- |
| [AQI-Vision-Predictor](https://github.com/Kush5699/AQI-Vision-Predictor) | Notebook implements stratified 70/15/15 image splits, custom CNN, two-phase EfficientNet-B0 fine-tuning, a pollutant-based Random Forest baseline, classification reports and error analysis. README reports 6,000 photographs, six balanced classes and 93.78% EfficientNet accuracy. | Good alternate archive addition, but existing selected work already covers deep vision and sustainability. Random splits do not establish location/time generalization. Pollutants directly help define the target, so the near-perfect tabular baseline is not equivalent to image-only inference. Do not claim regulatory-grade AQI measurement. |
| [object-detection-rcnn-to-yolo](https://github.com/Kush5699/object-detection-rcnn-to-yolo) | Notebook contains IoU, selective search, crop-versus-RoI pooling timing, Faster R-CNN inference, custom NMS, YOLOv8n fine-tuning and model comparisons. Training outputs and weights are committed. | A sound course implementation, but ShelfMind is a stronger detector application. README reports 18.2× pooling speedup on its measured run and 0.638 mAP@50–95 for a fruit model; these are experiment-specific, not general detector comparisons. |
| [earth-observation-delhi-airshed](https://github.com/Kush5699/earth-observation-delhi-airshed) | Notebook uses GeoPandas spatial joins, Rasterio raster windows for majority labels, stratified data splitting, ResNet18 transfer learning and classification reports. README reports 9,216 patches before filtering and 8,015 afterward. | Useful geospatial breadth if expanding further. It uses Sentinel-2 **RGB** inputs for training, unlike the 12-band crop case study. Most labels are cropland; only seven water examples are reported and “Others” is absent in the reported class count. Random patch splits do not prove spatial generalization. No numerical final score is given in README, so do not invent one. |

## Selection logic

MS-AFR-Net and FREUID provide the deepest additional model/evaluation implementations; Gujarati VSR adds low-resource language research and an honest ongoing investigation; sleep breathing adds a distinct sensor/time-series problem and participant-level validation. Together they expand the existing portfolio without filling it with near-duplicate vision coursework. Feature them below the strongest complete systems and mark ongoing experiments explicitly. AQI is a credible alternate if an image/sustainability entry is preferred.

## Case-study content blocks

These supplement the problem, approach, result, stack, dates, links and metric suggestions above. They are ready to adapt into the single typed content file.

### MS-AFR-Net

**Four architecture steps:**

1. Align the input fingerprint with a spatial transformer.
2. Extract fine, medium and coarse ResNet feature maps.
3. Mix 1,029 spatial tokens with cross-scale attention and adaptive fusion.
4. Compare fingerprint embeddings with verification and identification metrics.

**Detail — Fine detail meets global structure.** The model projects Conv3, Conv4 and Conv5 features to a common embedding dimension. Cross-scale attention lets local ridge information interact with coarser structure, while a learned fusion gate weights the scales for each input. The final representation combines this branch with pooled CNN features, making the architectural change explicit and testable against the reproduced single-scale baseline.

**Detail — Read the benchmark in context.** The repository commits training logs, evaluation JSON and DET/CMC curves. Its seven primary contact-based sets average 19.22% EER, compared with the reproduced baseline's reported 41.29%; contactless, fingerphoto and latent sets remain harder. Both models use a smaller training corpus than the original AFR-Net paper. This is evidence about the local architecture comparison, not a claim of production biometric reliability or a new published state of the art.

### FREUID

**Four architecture steps:**

1. Derive three SRM noise residual maps from each RGB document image.
2. Encode the resulting six-channel input with EVA02-Large.
3. Train and validate while holding out an entire document type.
4. Ensemble fold predictions through a containerized inference pipeline.

**Detail — Make the validation question harder.** V15 uses document type as the grouping variable for leave-one-group-out validation. Each fold explicitly checks that its validation data contains one unseen type. This tests whether the model learns transferable authenticity signals rather than relying only on familiar layouts; earlier stratified experiments provide a useful comparison, but the code does not establish a verified private leaderboard improvement.

**Detail — Carry the model into a reproducible interface.** SRM maps augment RGB at the first convolution, followed by an EVA02 backbone, learnable GeM pooling and a classification neck. The inference implementation loads fold checkpoints, averages horizontal-flip predictions and writes submission output. The Docker setup supports network-disabled execution with mounted data and weights. Those artifacts make the inference interface concrete, while excluded checkpoints and challenge data remain necessary to reproduce a run.

### Gujarati VSR

**Four architecture steps:**

1. Prepare aligned Gujarati video clips and transcription manifests.
2. Extract AV-HuBERT visual features and MMS audio tokens.
3. Train Conformer-based sentence models and word-level experiment variants.
4. Diagnose alignment, data coverage and generalization before claiming a benchmark.

**Detail — A low-resource pipeline, with visible failure modes.** The repository includes feature extraction, audio tokenization, tokenizers, variable-length batching and model-training code. Early sentence experiments on the reported 5,216 clips reduced validation loss, but the README records that this did not produce a reliable lip-to-text mapping. Current sentence code disables synchronization loss after it hurt the small-data setting. That observation is part of the research result, rather than something to hide behind a headline accuracy.

**Detail — Separate scaffolding from a completed study.** The word-level script contains dataset manifests and feature-only, Conformer and synchronization-loss model variants. It also includes alignment checks and clip inspection. A dedicated 30-class word collection and its ablation scores remain in progress in the public README. This case study should describe the implemented investigation and next evaluation step, without treating the planned dataset, speaker generalization or pending top-1 results as completed evidence.

### Sleep breathing

**Four architecture steps:**

1. Align airflow, thoracic movement and oxygen-saturation recordings.
2. Filter and label overlapping 30-second signal windows.
3. Train a weighted three-channel 1D CNN.
4. Evaluate five folds, each with a completely held-out participant.

**Detail — Turn asynchronous signals into a consistent input.** Airflow and thoracic movement arrive at 32 Hz, while SpO₂ arrives at 4 Hz. Preprocessing aligns the recordings, filters the respiratory waveforms and creates 30-second windows with a 15-second stride. Linear interpolation brings SpO₂ to the common window length; a 1D CNN then consumes all three channels. Rare event categories are consolidated into apnea, hypopnea and normal classes.

**Detail — Test the participant, not adjacent windows.** Training explicitly separates participants, so overlapping windows from the same held-out person do not enter training. The committed five-fold CSV reports mean accuracy of 57.67%, macro precision of 38.30% and macro recall of 44.55%, with substantial variation between people. Approximately 91% normal windows make aggregate accuracy insufficient on its own. The project demonstrates an honest generalization test on a small cohort, with no claim of clinical diagnostic validation.
